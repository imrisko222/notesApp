import DeleteIcon from "../components/icons/delete.svg";
import ArchiveIcon from "../components/icons/archive.svg";

export const deleteMessage = {
  title: "Delete Note",
  body: "Are you sure you want to permanently delete this note? This action cannot be undone.",
  cancelLabel: "Cancel",
  confirmLabel: "Delete Note",
  buttonVariant: "danger",
  icon: DeleteIcon,
};

export const archiveMessage = {
  title: "Archive Note",
  body: "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.",
  cancelLabel: "Cancel",
  confirmLabel: "Archive Note",
  buttonVariant: "primary",
  icon: ArchiveIcon,
};
