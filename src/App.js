import "./App.css";
import Dialog from "./components/Dialog";

function App() {
  const popupValueList = [
    {
      id:1,
      title: "How did we go?",
      description:
        "Please let us know how we did with your support request. All feedback is appriciated to help us improve our offering!",
    },
    {
      id:2,
      title: "How do we go?",
      description: "Please let us know how we did with your support request",
    },
    {
      id:3,
      title: "How will we go?",
      description:
        " All feedback is appriciated to help us improve our offering!",
    },
    {
      id:4,
      title: "How can we go?",
      description: "Please let us know",
    },
    {
      id:5,
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
