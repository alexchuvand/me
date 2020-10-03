export const commonStyle = (theme) => {
  return {
    root: {
      flexGrow: 1,
      minHeight: "100vh",
      padding: theme.spacing(1),
    },
    title: {
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  };
};
