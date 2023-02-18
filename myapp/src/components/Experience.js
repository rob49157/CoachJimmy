import React from "react";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PoolIcon from '@material-ui/icons/Pool';
import 'react-vertical-timeline-component/style.min.css'
function Experience() {
    return (
      <div>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2004-2008"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<PoolIcon />}
          >
              <h3 className="vertical-timeline-element-title">Race #1</h3>
          <p> Race Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2008-Present"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
          >
              <h3 className="vertical-timeline-element-title">Race #2</h3>
          <p> Race Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019-2020"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
          >
              <h3 className="vertical-timeline-element-title">Race #3</h3>
          <p> Race Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021-2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
              <h3 className="vertical-timeline-element-title">Race #4</h3>
          <p> Race Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020-2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<WorkIcon />}
          >
              <h3 className="vertical-timeline-element-title">Race #5</h3>
          <p> Race Description</p>
          </VerticalTimelineElement>
        
        </VerticalTimeline>
      </div>
    );
  }
  
  export default Experience;
  

