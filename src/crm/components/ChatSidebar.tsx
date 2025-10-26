import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

interface ConversationHistory {
  id: string;
  title: string;
  timestamp: string;
}

interface ChatSidebarProps {
  userProfile?: {
    name: string;
    avatar?: string;
    email?: string;
  };
  conversationHistory?: ConversationHistory[];
  onNewChat?: () => void;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
  activeConversationId?: string;
}

export default function ChatSidebar({
  userProfile = {
    name: "John Doe",
    email: "john@example.com",
  },
  conversationHistory = [],
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
  activeConversationId,
}: ChatSidebarProps) {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#FFFFFF",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        pt: 2,
        px: 2,
        overflow: "auto",
      }}
      elevation={0}
    >
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ px: 1 }}>
          <Avatar
            src={userProfile.avatar}
            sx={{
              width: 40,
              height: 40,
              bgcolor: "primary.main",
            }}
          >
            {userProfile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
          <Stack spacing={0.25} sx={{ minWidth: 0 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {userProfile.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {userProfile.email}
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ my: 1 }} />

        <Button
          fullWidth
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={onNewChat}
          sx={{
            textTransform: "none",
            borderRadius: 1.5,
            bgcolor: "#0074E9",
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "0.95rem",
            py: 1.2,
            "&:hover": {
              bgcolor: "#0062C3",
            },
          }}
        >
          + New Chat
        </Button>

        <Box>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              color: "text.secondary",
              px: 1,
              display: "block",
              mb: 1,
            }}
          >
            Recent Conversations
          </Typography>
          <List sx={{ p: 0 }}>
            {conversationHistory.length > 0 ? (
              conversationHistory.map((conversation) => (
                <ListItem
                  key={conversation.id}
                  disablePadding
                  sx={{
                    mb: 0.5,
                  }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      size="small"
                      onClick={() => onDeleteConversation?.(conversation.id)}
                      sx={{
                        opacity: 0.6,
                        "&:hover": { opacity: 1 },
                      }}
                    >
                      <DeleteRoundedIcon fontSize="small" />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    selected={activeConversationId === conversation.id}
                    onClick={() => onSelectConversation?.(conversation.id)}
                    sx={{
                      borderRadius: 1.5,
                      py: 1,
                      bgcolor: activeConversationId === conversation.id ? "#CDE3FA" : "transparent",
                      "&:hover": {
                        bgcolor: "#F0F6FF",
                      },
                    }}
                  >
                    <ListItemText
                      primary={conversation.title}
                      secondary={conversation.timestamp}
                      primaryTypographyProps={{
                        variant: "body2",
                        sx: {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        },
                      }}
                      secondaryTypographyProps={{
                        variant: "caption",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ px: 1, py: 2, textAlign: "center" }}
              >
                No conversations yet
              </Typography>
            )}
          </List>
        </Box>
      </Stack>
    </Paper>
  );
}
