import { useForm, Controller } from "react-hook-form";
import RadioButton from "./RadioButton";

type DonationFormData = {
  donation: string;
};

const Donate = () => {
  const { control, handleSubmit } = useForm<DonationFormData>({
    defaultValues: {
      donation: "0",
    },
  });

  const onSubmit = (data: DonationFormData) => {
    console.log(data.donation);
  };

  return (
    <div className="donate">
      <div className="header-container">
        <h3 className="page-header">Empower the Next Generation</h3>
      </div>
      <div className="donate-hero-image-container">
        <img
          src="../../Images/donate2.jpg"
          alt="A group of kids gathered together"
          className="donate-hero-image"
        />
      </div>
      <div className="donate-statement-container">
        <p>
          Your donation helps us provide educational resources and opportunities
          for the youth in our community.
        </p>
        <p>We appreciate your support. Mahalo!</p>
      </div>
      <div className="donation-container">
        <div className="donation-selection">
          <form className="donate-form" onSubmit={handleSubmit(onSubmit)}>
            <legend id="donation-legend">Donation Amount</legend>
            <Controller
              control={control}
              name="donation"
              render={({ field: { onChange, value } }) => (
                <RadioButton
                  label="$10"
                  value="10"
                  name="donation"
                  onChange={() => onChange("10")}
                  checked={value === "10"}
                />
              )}
            />
            <Controller
              control={control}
              name="donation"
              render={({ field: { onChange, value } }) => (
                <RadioButton
                  label="$25"
                  value="25"
                  name="donation"
                  onChange={() => onChange("25")}
                  checked={value === "25"}
                />
              )}
            />
            <Controller
              control={control}
              name="donation"
              render={({ field: { onChange, value } }) => (
                <RadioButton
                  label="$50"
                  value="50"
                  name="donation"
                  onChange={() => onChange("50")}
                  checked={value === "50"}
                />
              )}
            />
            <Controller
              control={control}
              name="donation"
              render={({ field: { onChange, value } }) => (
                <RadioButton
                  label="$100"
                  value="100"
                  name="donation"
                  onChange={() => onChange("100")}
                  checked={value === "100"}
                />
              )}
            />
            <Controller
              control={control}
              name="donation"
              render={({ field: { onChange, value } }) => (
                <RadioButton
                  label="Other"
                  value="Other"
                  name="donation"
                  onChange={() => onChange("Other")}
                  checked={value === "Other"}
                />
              )}
            />
            <div className="donate-button-container">
              <button className="btn-donate" type="submit">
                Donate Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
