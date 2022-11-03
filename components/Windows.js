import Draggable from "react-draggable";

export default function Window({ isOpen, onToggle, title, children, w }) {
  return (
    <Draggable bounds="body">
      {!isOpen ? (
        <div />
      ) : (
        <div className={`absolute top-32 left-64 window`}>
          <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button className="bg-[#c3c3c3]" aria-label="Minimize"></button>
              <button className="bg-[#c3c3c3]" aria-label="Maximize"></button>
              <button
                onClick={onToggle}
                className="bg-[#c3c3c3]"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="window-body">{children}</div>
        </div>
      )}
    </Draggable>
  );
}
