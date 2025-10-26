import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";

interface ChatInputAreaProps {
  onSendMessage: (message: string) => void;
  suggestedPrompts?: string[];
  onSuggestedPromptClick?: (prompt: string) => void;
}

export default function ChatInputArea({
  onSendMessage,
  suggestedPrompts = [],
  onSuggestedPromptClick,
}: ChatInputAreaProps) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedPromptClick = (prompt: string) => {
    setInputValue(prompt);
    if (onSuggestedPromptClick) {
      onSuggestedPromptClick(prompt);
    }
  };

  return (
    <Paper
      sx={{
        width: "100%",
        p: 2,
        borderRadius: 2,
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.06)",
        bgcolor: "#FFFFFF",
      }}
      elevation={0}
    >
      {suggestedPrompts.length > 0 && !inputValue && (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ mb: 2, flexWrap: "wrap" }}
        >
          {suggestedPrompts.map((prompt, index) => (
            <Chip
              key={index}
              label={prompt}
              onClick={() => handleSuggestedPromptClick(prompt)}
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 1.5,
                borderColor: "#CDE3FA",
                color: "#0074E9",
                fontSize: "0.85rem",
                "&:hover": {
                  bgcolor: "#F0F6FF",
                  borderColor: "#0074E9",
                },
              }}
            />
          ))}
        </Stack>
      )}

      <Stack direction="row" spacing={1} alignItems="flex-end">
        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder="Ask me anything..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1.5,
              bgcolor: "#F9FAFB",
              borderColor: "#E5E7EB",
              "&:hover": {
                borderColor: "#CDE3FA",
              },
              "&.Mui-focused": {
                borderColor: "#0074E9",
                boxShadow: "0 0 0 3px rgba(0, 116, 233, 0.08)",
              },
            },
          }}
        />
        <IconButton
          size="small"
          sx={{ color: "action.active" }}
        >
          <AttachmentRoundedIcon />
        </IconButton>
        <IconButton
          size="small"
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          sx={{
            color: inputValue.trim() ? "#0074E9" : "#D1D5DB",
            "&:hover": {
              bgcolor: "rgba(0, 116, 233, 0.08)",
            },
          }}
        >
          <SendRoundedIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}
