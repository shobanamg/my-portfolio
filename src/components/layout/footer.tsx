import { Copyright } from "lucide-react";

import Typography from "@/components/general/typography";

const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} | Designed and coded with ❤️️ by Shobana
          Mathiarul
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
