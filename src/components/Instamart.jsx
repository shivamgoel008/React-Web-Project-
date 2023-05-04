import React, { useEffect, useState } from "react";

const Section = (props) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3>{props.title}</h3>
      {props.isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => props.setIsVisible()}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => props.setIsVisible() }
        >
          Show
        </button>
      )}

      {props.isVisible && <p>{props.description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <React.Fragment>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection==="about"}
        setIsVisible={() =>
          setVisibleSection("about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection==="team"}
        setIsVisible={() =>
          setVisibleSection("team")
        }
      />
      <Section
        title={"careers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection==="careers"}
        setIsVisible={() =>
          setVisibleSection("careers")
        }
      />
    </React.Fragment>
  );
};

export default Instamart;
