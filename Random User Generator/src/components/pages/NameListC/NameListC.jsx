import React, { Component } from "react";
import NameListItem from "../NameList/NameListItem";
import SkeletonCard from "../../../components/SkeletonCard/SkeletonCard";
import "../NameList/NameList.css";
import "./NameListC.css";

const INITIAL_USERS = [
  {
    id: "c-initial-1",
    name: { title: "mr", first: "Brad", last: "Gibson" },
    location: { city: "Kilcoole" },
    email: "brad.gibson@example.com",
    dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
    picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg" },
  },
  {
    id: "c-initial-2",
    name: { title: "mr", first: "Samuel", last: "Martin" },
    location: { city: "Whangarei" },
    email: "samuel.martin@example.com",
    dob: { date: "1990-03-15T12:00:00.000Z", age: 34 },
    picture: { medium: "https://randomuser.me/api/portraits/med/men/70.jpg" },
  },
];

class NameListC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameList: INITIAL_USERS,
      loading: true,
      adding: false,
      error: null,
      search: "",
    };
  }

  componentDidMount() {
    this.fetchUser(true);
  }

  fetchUser = (isInitial = false) => {
    if (isInitial) {
      this.setState({ loading: true, error: null });
    } else {
      this.setState({ adding: true, error: null });
    }

    fetch("https://randomuser.me/api")
      .then((res) => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const user = { ...data.results[0], id: `api-c-${Date.now()}` };
        this.setState((prev) => ({
          nameList: [...prev.nameList, user],
          loading: false,
          adding: false,
        }));
      })
      .catch((err) => {
        this.setState({
          error: err.message || "Failed to fetch user. Check your connection.",
          loading: false,
          adding: false,
        });
      });
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  getFilteredList = () => {
    const { nameList, search } = this.state;
    const q = search.toLowerCase();
    if (!q) return nameList;
    return nameList.filter((u) => {
      const fullName = `${u.name.first} ${u.name.last}`.toLowerCase();
      const city     = (u.location?.city || "").toLowerCase();
      const email    = (u.email || "").toLowerCase();
      return fullName.includes(q) || city.includes(q) || email.includes(q);
    });
  };

  render() {
    const { loading, adding, error, search, nameList } = this.state;
    const filteredList = this.getFilteredList();

    return (
      <div className="namelist-page">
        <div className="container">
          {/* Page header */}
          <div className="namelist-header">
            <div className="namelist-header__left">
              <div className="namelist-header__eyebrow">
                <span className="badge badge-accent">👥 User Directory</span>
                <span className="namelistc-label" aria-label="Class component implementation">
                  🏛️ Class Component
                </span>
              </div>
              <h1 className="namelist-header__title">
                People <span className="gradient-text">Directory</span>
              </h1>
              <p className="namelist-header__subtitle">
                Class component implementation — same features, different React pattern.
              </p>
            </div>
            <div className="namelist-header__actions">
              <button
                id="add-user-class-btn"
                className="btn btn-primary"
                onClick={() => this.fetchUser(false)}
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

          {/* Class component info banner */}
          <div className="namelistc-info" role="note">
            <span className="namelistc-info__icon" aria-hidden="true">📚</span>
            <span>
              This page uses a <strong>React Class Component</strong> with{" "}
              <code>componentDidMount</code> and <code>componentDidUpdate</code> lifecycle methods.
              Compare with the{" "}
              <a href="/namelist">Hooks version</a> to see both patterns side by side.
            </span>
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
                onClick={() => this.fetchUser(false)}
                id="retry-class-btn"
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
                  id="user-search-class"
                  type="search"
                  className="namelist-toolbar__input"
                  placeholder="Search by name, city, or email…"
                  value={search}
                  onChange={this.handleSearchChange}
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
                      onClick={() => this.setState({ search: "" })}
                      id="clear-search-class-btn"
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
}

export default NameListC;
