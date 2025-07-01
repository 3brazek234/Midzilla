import TicketStatusBadge from "./TicketStatusBadge";
import TicketPriorityBadge from "./TicketPriorityBadge";
import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale";

const TicketRow = ({ ticket, onSelectTicket }) => {
  return (
    <tr
      onClick={() => onSelectTicket(ticket)}
      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-200"
    >
      <td className="py-4 px-6">
        <div className="font-bold text-gray-800 dark:text-white">
          {ticket.subject}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          #{ticket.id}
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <img
            src={ticket.user.avatar}
            alt={ticket.user.name}
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {ticket.user.name}
          </span>
        </div>
      </td>
      <td className="py-4 px-6">
        <TicketStatusBadge status={ticket.status} />
      </td>
      <td className="py-4 px-6">
        <TicketPriorityBadge priority={ticket.priority} />
      </td>
      <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
        {formatDistanceToNow(new Date(ticket.updatedAt), {
          addSuffix: true,
          locale: ar,
        })}
      </td>
    </tr>
  );
};

const TicketsTable = ({ tickets, onSelectTicket }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                الموضوع
              </th>
              <th scope="col" className="py-3 px-6">
                العميل
              </th>
              <th scope="col" className="py-3 px-6">
                الحالة
              </th>
              <th scope="col" className="py-3 px-6">
                الأولوية
              </th>
              <th scope="col" className="py-3 px-6">
                آخر تحديث
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <TicketRow
                key={ticket.id}
                ticket={ticket}
                onSelectTicket={onSelectTicket}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsTable; 