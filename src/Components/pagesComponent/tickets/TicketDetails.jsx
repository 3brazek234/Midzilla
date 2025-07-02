import { useState } from "react";
import { FaArrowRight, FaPaperPlane } from "react-icons/fa";
import TicketStatusBadge from "./TicketStatusBadge";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

const ReplyForm = ({ onReply }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onReply(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-3 text-sm text-gray-900 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        rows="4"
        placeholder="اكتب ردك هنا..."
        required
      ></textarea>
      <div className="flex justify-end mt-3">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg flex items-center gap-2 transition-colors duration-200"
        >
          <FaPaperPlane />
          <span>إرسال الرد</span>
        </button>
      </div>
    </form>
  );
};

const Conversation = ({ messages }) => {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 ${
            msg.sender === "support" ? "flex-row-reverse" : ""
          }`}
        >
          <img
            src={msg.avatar}
            alt={msg.name || "User"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div
            className={`p-4 rounded-xl max-w-lg ${
              msg.sender === "support"
                ? "bg-blue-100 dark:bg-blue-900 text-gray-800 dark:text-gray-100"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            }`}
          >
            <p className="text-sm">{msg.message}</p>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-left">
              {format(new Date(msg.timestamp), "p, MMM d", { locale: ar })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TicketDetails = ({ ticket, onBack, onReply }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
      <header className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-3"
          >
            <FaArrowRight />
            <span>العودة إلى كل التذاكر</span>
          </button>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {ticket.subject}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <TicketStatusBadge status={ticket.status} />
        </div>
      </header>

      <main>
        <Conversation messages={ticket.conversation} />
        <ReplyForm onReply={onReply} />
      </main>
    </div>
  );
};

export default TicketDetails; 