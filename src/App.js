import "./App.css";
import Dialog from "./components/Dialog";

function App() {
  const popupValueList = [
    {
      title: "How did we go?",
      description:
        "Please let us know how we did with your support request. All feedback is appriciated to help us improve our offering!",
    },
    {
      title: "How do we go?",
      description: "Please let us know how we did with your support request",
    },
    {
      title: "How will we go?",
      description:
        " All feedback is appriciated to help us improve our offering!",
    },
    {
      title: "How can we go?",
      description: "Please let us know",
    },
    {
      title: "How should we go?",
      description: "Please let us know",
    },
  ];

  return (
    <div className="App">
      <Dialog valueList={popupValueList} />
    </div>
  );
}

export default App;
