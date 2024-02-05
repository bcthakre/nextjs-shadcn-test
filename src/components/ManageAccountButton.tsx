

import { generatePortalLink } from "../../actions/generatePortalLink";
import { Button } from "./ui/button";

function ManageAccountButton() {
  return (
    <form action={generatePortalLink}>
      <Button type="submit">Manage Billing</Button>
    </form>
  );
}

export default ManageAccountButton;
