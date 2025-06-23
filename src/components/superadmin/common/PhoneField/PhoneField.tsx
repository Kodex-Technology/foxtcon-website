import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneField.scss";
interface PhoneFieldProps {
  value: string;
  // onChange: (value: string) => void;
  onChange: (value: string, countryData?: string) => void;
  icon?: React.ReactNode;

  extractCountryCode?: boolean;
}
const PhoneField = ({
  value,
  onChange,

  extractCountryCode = false,
}: PhoneFieldProps) => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <PhoneInput
        country="us"
        value={value}
        preferredCountries={["us", "gb", "fr"]}
        enableSearch={true}
        onChange={(phoneNumber, countryData) => {
          const countryCode = (countryData as { dialCode?: string })?.dialCode;
          if (extractCountryCode) {
            onChange(phoneNumber, countryCode);
          } else {
            onChange(phoneNumber);
          }
        }}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: false,
          placeholder: "Enter phone number",
        }}
        inputStyle={{
          backgroundColor: "#f9fafe",
          border: "1px solid #e4e4e4 ",
          borderRadius: "10px",
          fontSize: "14px",
          width: "100%",
          height: "45px",
          boxShadow: "none",
        }}
        buttonStyle={{
          backgroundColor: "transparent",
          border: "none",
          borderRight: "1px solid #d1d5db",
        }}
      />
    </div>
  );
};

export default PhoneField;
