import { useOptimistic } from 'react';
import { useActionState } from 'react';
import { useState } from 'react';

async function submitFeedback(title, text) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a slow network or server
  console.log(`Feedback: ${title} - ${text}`);
  return { title, text, id: new Date().getTime() };
}

function App() {
  const [feedbackSubmissions, setFeedbackSubmissions] = useState([]);
  const [feedbackFormState, feedbackFormAction] = useActionState(saveFeedbackAction, {
    errorTitle: null,
    errorText: null,
  });
  const [optimisticFeedback, addOptimisticFeedback] = useOptimistic(
    feedbackSubmissions,
    (currentState, optimisticValue) => {
      return [...currentState, {...optimisticValue, id: "temp"}];
    }
  );

  async function saveFeedbackAction(prevState, formData){
    const title = formData.get("title");
    const text = formData.get("feedback");
    const errorObj = {
      errorTitle: null,
      errorText: null
    }

    if(!title || title.trim() === '') {
      errorObj.errorTitle = "Title must not be empty."
    }
    if(!text || text.trim() === '') {
        errorObj.errorText = "Text must not be empty."
    }

    if(!errorObj.errorTitle && !errorObj.errorText){
      addOptimisticFeedback({title, text, id: "temp"});
      const savedFeedback = await submitFeedback(title, text);

      setFeedbackSubmissions((prevSubmissions) => (
        [...prevSubmissions, savedFeedback]
      ));
    }

    return errorObj;
  }

  return (
    <>
      <header>
        <h1>Feedback Form</h1>
      </header>
      <form action={feedbackFormAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name='title' />
        </p>
        <p>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" name='feedback' rows={3} />
        </p>

        {/* Todo: Output <ul> list of validation errors here! */}
        <ul>
          {feedbackFormState.errorTitle && <li>{feedbackFormState.errorTitle}</li>}
          {feedbackFormState.errorText && <li>{feedbackFormState.errorText}</li>}
        </ul>

        <p className="actions">
          <button>Send Feedback</button>
        </p>
      </form>
      <div id="user-feedback">
        <h2>Your Submissions</h2>
        {optimisticFeedback.length === 0 && (
          <p>No feedback submitted yet.</p>
        )}
        {optimisticFeedback.length > 0 && (
          <ul>
            {optimisticFeedback.map((submission) => (
              <li key={submission.id}>
                <h3>{submission.title}</h3>
                <p>{submission.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;