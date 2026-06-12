import React from "react";
import "./NameListItem.css";

/**
 * Formats an ISO date string to a readable date using the native Intl API.
 * Avoids the moment.js dependency.
 */
function formatDate(isoDate) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

function NameListItem({ name, city, email, birthday, avatar, index = 0 }) {
  return (
    <li
      className="user-card"
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`User profile: ${name}`}
    >
      {/* Avatar */}
      <div className="user-card__avatar-wrap">
        <div className="user-card__avatar-ring" aria-hidden="true" />
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="user-card__avatar"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=60`;
          }}
        />
      </div>

      {/* Info */}
      <div className="user-card__content">
        <h3 className="user-card__name">{name}</h3>
        <div className="user-card__meta">
          <span className="user-card__meta-item">
            <span className="user-card__meta-icon" aria-hidden="true">📍</span>
            {city}
          </span>
          <span className="user-card__meta-item">
            <span className="user-card__meta-icon" aria-hidden="true">✉️</span>
            {email}
          </span>
          <span className="user-card__meta-item">
            <span className="user-card__meta-icon" aria-hidden="true">🎂</span>
            {formatDate(birthday)}
          </span>
        </div>
      </div>
    </li>
  );
}

export default NameListItem;
