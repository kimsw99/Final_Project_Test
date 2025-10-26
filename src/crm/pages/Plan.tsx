import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ChatSidebar from "../components/ChatSidebar";
import ChatMessageBubble from "../components/ChatMessageBubble";
import ChatInputArea from "../components/ChatInputArea";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
}

interface ConversationHistory {
  id: string;
  title: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hi! I'm your AI assistant. How can I help you today?",
    sender: "ai",
    timestamp: "12:00 PM",
  },
  {
    id: "2",
    text: "Can you help me analyze my sales data?",
    sender: "user",
    timestamp: "12:01 PM",
  },
  {
    id: "3",
    text: "Absolutely! I can help you analyze your sales data. What specific insights are you looking for? I can help with:\n\n• Sales trend analysis\n• Customer segmentation\n• Revenue forecasting\n• Performance metrics\n• Competitor analysis",
    sender: "ai",
    timestamp: "12:01 PM",
  },
];

const conversationHistory: ConversationHistory[] = [
  {
    id: "conv-1",
    title: "Q3 Sales Analysis",
    timestamp: "Today",
  },
  {
    id: "conv-2",
    title: "Customer Insights Discussion",
    timestamp: "Yesterday",
  },
  {
    id: "conv-3",
    title: "Revenue Forecasting",
    timestamp: "2 days ago",
  },
  {
    id: "conv-4",
    title: "Market Trends Overview",
    timestamp: "1 week ago",
  },
];

const suggestedPrompts = [
  "Analyze this month's sales trends",
  "Generate a customer report",
  "What are the top performing products?",
  "Create a marketing strategy",
];

export default function Plan() {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [activeConversationId, setActiveConversationId] = React.useState(
    "conv-1"
  );
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message: string) => {
    const newUserMessage: Message = {
      id: `msg-${Date.now()}`,
      text: message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newUserMessage]);

    setTimeout(() => {
      const aiResponse: Message = {
        id: `msg-${Date.now() + 1}`,
        text: `Thank you for your question about "${message}". I'm analyzing this for you. Here are some key insights based on your data:\n\n• This is a sample AI response\n• I'm ready to help with your CRM needs\n• You can ask me about sales, customers, and analytics`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 800);
  };

  const handleNewChat = () => {
    setMessages(initialMessages);
    setActiveConversationId(`conv-new-${Date.now()}`);
  };

  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id);
    setMessages(initialMessages);
  };

  const handleDeleteConversation = (id: string) => {
    console.log("Deleted conversation:", id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "calc(100vh - var(--template-frame-height, 0px))",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: sidebarOpen ? 280 : 0 },
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          overflow: "hidden",
          transition: "width 0.2s ease",
        }}
      >
        <ChatSidebar
          userProfile={{
            name: "Sarah Johnson",
            email: "sarah@acme.com",
          }}
          conversationHistory={conversationHistory}
          onNewChat={handleNewChat}
          onSelectConversation={handleSelectConversation}
          onDeleteConversation={handleDeleteConversation}
          activeConversationId={activeConversationId}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bgcolor: "background.default",
        }}
      >
        <Paper
          sx={{
            flexGrow: 1,
            overflow: "auto",
            p: { xs: 2, md: 3 },
            borderRadius: 0,
            mb: { xs: 14, sm: 11, md: 10 },
            display: "flex",
            flexDirection: "column",
          }}
          elevation={0}
        >
          <Stack spacing={2} sx={{ flex: 1 }}>
            {messages.length === 0 && (
              <Stack
                spacing={3}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  textAlign: "center",
                  py: 8,
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  Start a Conversation
                </Typography>
                <Typography color="text.secondary">
                  Ask me anything about your sales, customers, or analytics
                </Typography>
              </Stack>
            )}
            {messages.map((msg) => (
              <ChatMessageBubble
                key={msg.id}
                message={msg.text}
                sender={msg.sender}
                timestamp={msg.timestamp}
              />
            ))}
            <div ref={messagesEndRef} />
          </Stack>
        </Paper>

        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            left: { xs: 0, md: sidebarOpen ? 280 : 0 },
            transition: "left 0.2s ease",
          }}
        >
          <ChatInputArea
            onSendMessage={handleSendMessage}
            suggestedPrompts={suggestedPrompts}
            onSuggestedPromptClick={(prompt) => handleSendMessage(prompt)}
          />
        </Box>
      </Box>
    </Box>
  );
}
