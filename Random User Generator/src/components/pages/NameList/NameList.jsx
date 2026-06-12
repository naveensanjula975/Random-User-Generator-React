import React, { useEffect, useState, useCallback } from "react";
import NameListItem from "./NameListItem";
import SkeletonCard from "../../../components/SkeletonCard/SkeletonCard";
import "./NameList.css";

const INITIAL_USERS = [
  {
    id: "initial-1",
    name: { title: "mr", first: "Brad", last: "Gibson" },
    location: { city: "Kilcoole" },
    email: "brad.gibson@example.com",
    dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
    picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
  },
  {
    id: "initial-2",
    name: { title: "mr", first: "Samuel", last: "Martin" },
    location: { city: "Whangarei" },
    email: "samuel.martin@example.com",
    dob: { date: "1990-03-15T12:00:00.000Z", age: 34 },
    picture: { medium: "https://randomuser.me/api/portraits/med/men/70.jpg" },
  },
];

function NameList() {
  const [nameList, setNameList] = useState(INITIAL_USERS);
  const [loading, setLoading]   = useState(false);
  const [adding, setAdding]     = useState(false);
  const [error, setError]       = useState(null);
  const [search, setSearch]     = useState("");

  /** Fetch a single user and append to the list */
  const fetchUser = useCallback(async (isInitial = false) => {
    if (isInitial) setLoading(true);
    else           setAdding(true);
    setError(null);

    try {
      const res  = await fetch("https://randomuser.me/api");
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      const user = { ...data.results[0], id: `api-${Date.now()}` };
      setNameList((prev) => [...prev, user]);
    } catch (err) {
      setError(err.message || "Failed to fetch user. Check your connection.");
    } finally {
      if (isInitial) setLoading(false);
      else           setAdding(false);
    }
  }, []);

  /* Fetch one user on mount */
  useEffect(() => {
    fetchUser(true);
  }, [fetchUser]);

  /** Filtered list */
  const filteredList = nameList.filter((u) => {
    const q = search.toLowerCase();
    if (!q) return true;
    const fullName = `${u.name.first} ${u.name.last}`.toLowerCase();
    const city     = (u.location?.city || "").toLowerCase();
    const email    = (u.email || "").toLowerCase();
    return fullName.includes(q) || city.includes(q) || email.includes(q);
  });

  return (
    <div className="namelist-page">
      <div className="container">
        {/* Page header */}
        <div className="namelist-header">
          <div className="namelist-header__left">
            <div className="namelist-header__eyebrow">
              <span className="badge badge-accent">👥 User Directory</span>
            </div>
            <h1 className="namelist-header__title">
              People <span className="gradient-text">Directory</span>
            </h1>
            <p className="namelist-header__subtitle">
              Browse and discover randomly generated user profiles.
            </p>
          </div>
          <div className="namelist-header__actions">
            <button
              id="add-user-btn"
              className="btn btn-primary"
              onClick={() => fetchUser(false)}
              disabled={adding}
              aria-busy={adding}
              aria-label="Add a new random user"
            >
              {adding ? (
                <>
                  <span className="btn-spinner" aria-hidden="true" />
                  Adding…
                </>
              ) : (
                <>
                  <span aria-hidden="true">＋</span> Add User
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error banner */}
        {error && (
          <div className="namelist-error" role="alert" aria-live="assertive">
            <span className="namelist-error__icon" aria-hidden="true">⚠️</span>
            <div className="namelist-error__content">
              <p className="namelist-error__title">Could not load user</p>
              <p className="namelist-error__desc">{error}</p>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => fetchUser(false)}
              id="retry-btn"
            >
              Retry
            </button>
          </div>
        )}

        {/* Toolbar */}
        {!loading && (
          <div className="namelist-toolbar">
            <div className="namelist-toolbar__search" role="search">
              <span className="namelist-toolbar__search-icon" aria-hidden="true">🔍</span>
              <input
                id="user-search"
                type="search"
                className="namelist-toolbar__input"
                placeholder="Search by name, city, or email…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search users"
                autoComplete="off"
              />
            </div>
            <span className="namelist-toolbar__count" aria-live="polite">
              {filteredList.length} of {nameList.length} user{nameList.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* Loading skeletons */}
        {loading && (
          <div className="skeleton-list" aria-label="Loading users…" aria-busy="true">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* User list */}
        {!loading && (
          <>
            {filteredList.length === 0 ? (
              <div className="state-container" role="status">
                <span className="state-icon" aria-hidden="true">🔍</span>
                <p className="state-title">No users found</p>
                <p className="state-desc">
                  {search
                    ? `No results for "${search}". Try a different search term.`
                    : "Add a user to get started."}
                </p>
                {search && (
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setSearch("")}
                    id="clear-search-btn"
                  >
                    Clear search
                  </button>
                )}
              </div>
            ) : (
              <ul className="user-list" aria-label={`${filteredList.length} users`}>
                {filteredList.map((user, index) => (
                  <NameListItem
                    key={user.id || user.login?.uuid || index}
                    name={`${user.name.first} ${user.name.last}`}
                    city={user.location?.city || "Unknown city"}
                    email={user.email}
                    birthday={user.dob?.date}
                    avatar={user.picture?.medium}
                    index={index}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default NameList;
