/**
 * Renders the donation page with selectable donation amounts
 */
import { useForm, Controller } from "react-hook-form";
import RadioButton from "./RadioButton";
import { useState } from "react";
import { Link } from "react-router";

type DonationFormData = {
  donation: string;
  otherDonation: string;
};

const Donate = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DonationFormData>({
    defaultValues: {
      donation: "0",
      otherDonation: "",
    },
  });

  /**
   * Handles display of donation confirmation modal
   */
  const [donationAmount, setDonationAmount] = useState("0");
  const [hasDonated, setHasDonated] = useState(false);

  /** Handles display of Other donation amount selection */
  const selectedDonation = watch("donation");
  const otherDonationAmount = watch("otherDonation");

  /**
   * Handles donation form submission
   * @param data - selected donation amount
   */
  const onSubmit = (data: DonationFormData) => {
    const finalDonationAmount =
      data.donation === "Other" ? data.otherDonation : data.donation;

    if (!finalDonationAmount || finalDonationAmount === "0") {
      setHasDonated(false);
    } else {
      setHasDonated(true);
      setDonationAmount(finalDonationAmount);
    }
  };

  return (
    <div className="donate">
      {hasDonated && (
        <div className="donate-confirmation-modal">
          <div className="donate-confirmation-text">
            <h3 className="donate-confirm-header">Thank You!</h3>
            <p>
              Your donation amount of ${donationAmount} will be processed via
              Instagram.
            </p>
            <Link
              to="https://www.instagram.com/skusuks/donate"
              target="_blank"
              className="donation-link"
              onClick={() => setHasDonated(false)}
            >
              Confirm your Donation
            </Link>
          </div>
        </div>
      )}
      {!hasDonated && (
        <>
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
              Your donation helps us provide educational resources and
              opportunities for the youth in our community.
            </p>
            <p>We appreciate your support. Mahalo!</p>
          </div>
          <div className="donation-container">
            <div className="donation-selection">
              <form className="donate-form" onSubmit={handleSubmit(onSubmit)}>
                <legend id="donation-legend">Donation Amount</legend>
                <div className="donation-options">
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
                </div>
                <div className="donate-button-container">
                  <button className="btn-donate" type="submit">
                    Donate Now
                  </button>
                </div>
                {selectedDonation === "Other" && (
                  <div className="other-donation-modal">
                    <div className="other-donation-container">
                      <h3>Please enter your donation amount</h3>
                      <input
                        type="text"
                        inputMode="decimal"
                        className="other-donation"
                        value={otherDonationAmount || ""}
                        {...register("otherDonation", {
                          required: "Other donation amount is required",
                          pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: "Please enter numbers only",
                          },
                          validate: (value) =>
                            Number(value) > 0 ||
                            "Please enter an amount greater than zero",
                        })}
                      />
                      {errors.otherDonation && (
                        <div className="error-message-container">
                          <p>{errors.otherDonation.message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Donate;
