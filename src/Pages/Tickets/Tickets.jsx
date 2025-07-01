import { useState } from "react";
import TicketsHeader from "../../Components/pagesComponent/tickets/TicketsHeader";
import TicketsTable from "../../Components/pagesComponent/tickets/TicketsTable";
import TicketDetails from "../../Components/pagesComponent/tickets/TicketDetails";
import { ticketsData as initialTicketsData } from "../../Constants/ticketsData";
import { adminUser } from "../../Components/common/SideBar/SideBar";

const Tickets = () => {
  const [tickets, setTickets] = useState(initialTicketsData);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleBackToList = () => {
    setSelectedTicket(null);
  };

  const handleReply = (message) => {
    const newReply = {
      sender: "support",
      name: adminUser.name,
      avatar: adminUser.imageUrl,
      message,
      timestamp: new Date().toISOString(),
    };

    const updatedTickets = tickets.map((t) => {
      if (t.id === selectedTicket.id) {
        return {
          ...t,
          conversation: [...t.conversation, newReply],
          updatedAt: new Date().toISOString(),
          status: "قيد المعالجة",
        };
      }
      return t;
    });

    setTickets(updatedTickets);
    // Update the selected ticket state to show the new message immediately
    setSelectedTicket((prev) => ({
      ...prev,
      conversation: [...prev.conversation, newReply],
    }));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen" dir="rtl">
      {!selectedTicket ? (
        <>
          <TicketsHeader onNewTicket={() => console.log("New Ticket")} />
          <TicketsTable tickets={tickets} onSelectTicket={handleSelectTicket} />
        </>
      ) : (
        <TicketDetails
          ticket={selectedTicket}
          onBack={handleBackToList}
          onReply={handleReply}
        />
      )}
    </div>
  );
};

export default Tickets;