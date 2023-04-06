import { MailOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
        libero totam voluptates assumenda, beatae tempore placeat dolorem vitae
        quod, at odio repellendus! Totam blanditiis natus error praesentium
        esse? Provident!
      </Typography> */}
      <NothingSelectedView />

      {/* NoteView */}
    </JournalLayout>
  );
};
