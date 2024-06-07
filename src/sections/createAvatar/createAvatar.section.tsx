import React, { useState, ChangeEvent, FormEvent } from "react";

type BuisnessTypes = {
    restaurant: boolean;
    museum: boolean;
    other: boolean;
};

export const CreateAvatarSection: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [businessName, setBusinessName] = useState<string>("");
    const [buisnessType, setBuisnessType] = useState<string>("restaurant");
    const [options, setOptions] = useState<BuisnessTypes>({
        restaurant: true,
        museum: false,
        other: false,
    });
    const [url, setUrl] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [about, setAbout] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            businessName,
            buisnessType,
            selectedOption,
            options,
            url,
            about,
        );
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setBuisnessType("restaurant");
        setBusinessName("");
        setOptions({
            restaurant: false,
            museum: false,
            other: false,
        });
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
      <div className="App">
        <h1>Create an avatar for your business </h1>
        <h2>Business owner's details: </h2>
        <fieldset>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              Enter your first name:*
              <input
              type="text"
               name="firstName"
               id="firstName"
               value={firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                        placeholder="enter your first name"
                        required
            />
            </label>

            <label htmlFor="lastName">
              Enter your last name:*
              <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                        required
            />
            </label>

            <label htmlFor="email">
              Enter Email:*
              <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
            />
            </label>

            <label htmlFor="tel">
              Mobile Number:*
              <input
              type="tel"
              name="contact"
              id="contact"
              value={contact}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
              placeholder="Enter a mobile number"
              required
            />
            </label>

            <h2>Business' details: </h2>

            <label htmlFor="nameBusiness">
              Name of your business:*
              <input
              type="text"
              name="nameBusiness"
              id="nameBusiness"
              value={businessName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setBusinessName(e.target.value)}
              placeholder="Enter your business name"
              required
                    />
            </label>

            <label htmlFor="type">
              Business type:*
              <input
              type="radio"
              name="type"
              value="Restaurant"
              id="Restaurant"
              checked={buisnessType === "Restaurant"}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBuisnessType(e.target.value)}
              />
              Restaurant
              <input
              type="radio"
              name="type"
              value="Museum"
              id="Museum"
              checked={buisnessType === "Museum"}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBuisnessType(e.target.value)}
              />
              Museum
              <input
              type="radio"
              name="type"
              value="other"
              id="other"
              checked={buisnessType === "other"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setBuisnessType(e.target.value)}
            />
              Other
            </label>

            <label htmlFor="desBusiness">
              Enter a description for your business:*
              <input
                type="text"
                name="desBusiness"
                id="desBusiness"
                value={contact}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                placeholder="Enter a description for your business"
                required
            />
            </label>

            <label htmlFor="url">
              Enter url of your business:
              <input
                type="url"
                name="url"
                id="url"
                value={url}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                 placeholder="Enter url"
            />
            </label>
            <h2>Create an Avatar: </h2>
            <label htmlFor="create">
              Select your choice:*
              <select
                  name="select"
                id="select"
                value={selectedOption}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value)}
            >
                <option
              value=""
              disabled
                  selected={selectedOption === ""}
                >
                  Select your Avatar
                </option>
                <option value="1">Mark</option>
                <option value="2">Itamar</option>
              </select>
            </label>

            <label htmlFor="text">
              Avatar text:*
              <textarea
              name="text"
              id="text"
              cols={30}
              rows={10}
              value={about}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAbout(e.target.value)}
              placeholder="write your Avatar's text"
              required
            >
              </textarea>
            </label>

            <button
              type="submit"
              value="Submit"
          >
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    );
};
