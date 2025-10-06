import { color, display } from "@mui/system";

const style = {
      shop: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            mx: "10px",
      },

      shopTitle: {
            fontSize: "30px",
            fontWeight: 600,
            color: "#1C274C"
      },
      shopButton: {
            textTransform: "none",
            border: "1px solid #8C92A4",
            borderRadius: "20px",
            "&: hover": {
                  backgroundColor: "#1c274c",
                  color: "#fff",
                  border: "none",
            },
      },

      shopButtonText: {
            fontSize: "14px",
            fontWeight: 500,
            color: "#1C274C",
            p: "0px 5px",
            "&: hover": {
                  color: "#fff",
            },
      },

      shopCardBox: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 2,
      },

      shopCard: {
            minWidth: 275,
            boxShadow: "2",
            borderRadius: "15px"
      },

      cardButton: {
            p: "5px 15px",
            textTransform: "none",
            borderRadius: "20px",
            backgroundColor: "#1c3fb7",
            color: "#fff",
            "&:hover": {
                  backgroundColor: "#3552b6",
            },
      },
     
}

export default style;