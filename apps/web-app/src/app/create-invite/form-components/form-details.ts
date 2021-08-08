import {Dispatch, SetStateAction} from "react";
import {InviteDetails} from "./invite-details";

export interface FormDetails {
  setForm: Dispatch<SetStateAction<any>>;
  form: InviteDetails;
  errors: any;
}
