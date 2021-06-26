import { useState } from "react";
import EmptyNewsLetterForm from "./EmptyNewsLetterForm";
import MessageAfterSending from "./MessageAfterSending";
const axios = require("axios").default;

const FooterForm = () => {
  const [messageAfterSendingForm, setMessageAfterSendingForm] = useState("");

  const sendForm = async (data) => {
    try {
      const resp = await axios.post("api/newsletter", data);

      setMessageAfterSendingForm(resp.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="footer-form">
      {messageAfterSendingForm == "" ? (
        <EmptyNewsLetterForm sendForm={sendForm} />
      ) : (
        <MessageAfterSending messageAfterSending={messageAfterSendingForm} />
      )}
    </div>
  );
};

export default FooterForm;
