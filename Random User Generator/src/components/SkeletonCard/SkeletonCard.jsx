import React from "react";
import "./SkeletonCard.css";

/**
 * SkeletonCard — animated shimmer placeholder for loading states.
 * Mirrors the visual shape of a UserCard.
 */
function SkeletonCard() {
  return (
    <article className="skeleton-card" aria-hidden="true">
      <div className="skeleton-header">
        <div className="skeleton-avatar" />
        <div className="skeleton-lines">
          <div className="skeleton-block" style={{ height: "18px", width: "60%" }} />
          <div className="skeleton-block" style={{ height: "13px", width: "40%" }} />
        </div>
      </div>
      <div className="skeleton-body">
        <div className="skeleton-block" style={{ height: "13px", width: "80%" }} />
        <div className="skeleton-block" style={{ height: "13px", width: "55%" }} />
        <div className="skeleton-block" style={{ height: "13px", width: "35%" }} />
      </div>
    </article>
  );
}

export default SkeletonCard;
