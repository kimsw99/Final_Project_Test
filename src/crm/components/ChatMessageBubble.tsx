import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

interface ChatMessageBubbleProps {
  message: string;
  sender: "user" | "ai";
  timestamp?: string;
  avatarUrl?: string;
}

export default function ChatMessageBubble({
  message,
  sender,
  timestamp,
  avatarUrl,
}: ChatMessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 2,
        alignItems: "flex-end",
      }}
    >
      {!isUser && (
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "primary.main",
            fontSize: "0.75rem",
          }}
        >
          AI
        </Avatar>
      )}
      <Paper
        sx={{
          maxWidth: "70%",
          px: 2,
          py: 1.5,
          bgcolor: isUser ? "primary.main" : "background.paper",
          color: isUser ? "primary.contrastText" : "text.primary",
          borderRadius: 2,
          boxShadow: isUser
            ? "0 2px 8px rgba(66, 133, 244, 0.2)"
            : "0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
        elevation={0}
      >
        <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
          {message}
        </Typography>
        {timestamp && (
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 0.5,
              opacity: 0.7,
            }}
          >
            {timestamp}
          </Typography>
        )}
      </Paper>
      {isUser && (
        <Avatar
          src={avatarUrl}
          sx={{
            width: 32,
            height: 32,
            bgcolor: "info.main",
          }}
        >
          U
        </Avatar>
      )}
    </Stack>
  );
}
