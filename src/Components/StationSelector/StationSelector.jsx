import React from "react";
import Player from "../Player/Player";
import styles from "./StationSelector.module.css";

const CodecButton = ({
  station,
  selectedStation,
  changeStation,
  codecButtonNotSelectedStyle,
  codecButtonWidthStyle,
  endpoint,
}) => (
  <div>
    <input
      type="radio"
      className="player-button"
      name="stations"
      id={station.name + endpoint.codec}
      onChange={() => changeStation({ ...station, ...endpoint })}
      hidden
    />
    <label
      className={`${styles.codecLabel} ${codecButtonWidthStyle} ${
        selectedStation?.endpoint === endpoint.endpoint
          ? styles.codecSelected
          : codecButtonNotSelectedStyle
      }`}
      htmlFor={station.name + endpoint.codec}
    >
    </label>
  </div>
);

const CodecButtonGroup = ({
  station,
  selectedStation,
  changeStation,
  codecButtonNotSelectedStyle,
  codecButtonWidthStyle,
  codecButtonsPerGroup,
}) => {
  const codecButtonGroups = [];

  for (let i = 0; i < station.endpoints.length; i += codecButtonsPerGroup) {
    codecButtonGroups.push(
      <div key={i / codecButtonsPerGroup} className={styles.codecs}>
        {station.endpoints
          .slice(i, i + codecButtonsPerGroup)
          .map((endpoint, idx) => (
            <CodecButton
              key={idx}
              station={station}
              endpoint={endpoint}
              codecButtonNotSelectedStyle={codecButtonNotSelectedStyle}
              codecButtonWidthStyle={codecButtonWidthStyle}
              selectedStation={selectedStation}
              changeStation={changeStation}
            />
          ))}
      </div>,
    );
  }

  return codecButtonGroups;
};

const codecButtonWidths = {
  4: styles.codecGroupFour,
  5: styles.codecGroupFive,
};

const Station = ({ station, selectedStation, changeStation }) => {
  let stationLabelStyle, codecButtonNotSelectedStyle;

  if (selectedStation?.name === station.name) {
    stationLabelStyle = styles.selected;
    codecButtonNotSelectedStyle = styles.codecNotSelected;
  } else {
    stationLabelStyle = styles.notSelected;
    codecButtonNotSelectedStyle = styles.codecNotSelectedNotPlaying;
  }

  const codecButtonsPerGroup = station.codecButtonsPerGroup || 3;
  const codecButtonWidthStyle = codecButtonWidths[codecButtonsPerGroup];

  return (
    <>
      <label
        className={`${styles.stationLabel} ${stationLabelStyle}`}
        htmlFor={station.name + station.endpoints[0].codec}
      >
        <div className={styles.stationName}>{station.city}</div>
        {/* <img src={station.imageUrl} width={"200px"} style={{ cursor:"pointer", maxWidth:"100px" }}/> */}
        <CodecButtonGroup
          station={station}
          selectedStation={selectedStation}
          changeStation={changeStation}
          codecButtonNotSelectedStyle={codecButtonNotSelectedStyle}
          codecButtonWidthStyle={codecButtonWidthStyle}
          codecButtonsPerGroup={codecButtonsPerGroup}
        />
      </label>
    </>
  );
};

const StationSelector = (props) => {
  return props.stations.map((station, idx) => (
    <>
    <Station
      key={idx}
      station={station}
      selectedStation={props.selectedStation}
      changeStation={props.changeStation}
    />
    </>
  ));
};

export default React.memo(StationSelector);