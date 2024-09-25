import { Navbar, Page } from "framework7-react";
import React from "react";

export default function Update() {
  return (
    <Page name="update" noToolbar>
      <Navbar title="更新历史" backLink="Back" />
      <div className="block-title">Only Tablet Side By Side</div>
      <div className="timeline medium-sides">
        <div className="timeline-item">
          <div className="timeline-item-date">
            21 <small>DEC</small>
          </div>
          <div className="timeline-item-divider" />
          <div className="timeline-item-content">
            <div className="timeline-item-inner">Some text goes here</div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-date">
            22 <small>DEC</small>
          </div>
          <div className="timeline-item-divider" />
          <div className="timeline-item-content">
            <div className="timeline-item-inner">Another text goes here</div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-date">
            23 <small>DEC</small>
          </div>
          <div className="timeline-item-divider" />
          <div className="timeline-item-content">
            <div className="timeline-item-inner">Just plain text</div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-date">
            24 <small>DEC</small>
          </div>
          <div className="timeline-item-divider" />
          <div className="timeline-item-content">
            <div className="timeline-item-inner">One more text here</div>
          </div>
        </div>
      </div>
    </Page>
  );
}
