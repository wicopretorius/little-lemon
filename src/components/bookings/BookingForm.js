import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({availableTimes, dispatchOnDateChange,submitData}) => {
  
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Office Party', 'Baby Shower'];
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  const invalidNameErrorMessage = 'Please fill in your name and surname';
  const invalidEmailErrorMessage = 'Please fill in a propper email address';
  const invalidSpecialRequestErrorMessage = 'Please fill in your request or type none';
  const invalidNumberOfGuestsErrorMessage = 'Please enter a number between 1 and 10';

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('none');

  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests !== '';
  const isOccasionValid = () => occasion !== '';
  const isNameValid = () => bookingName !== '';
  const isEmailValid = () => bookingEmail !== '';

  const areAllFieldsValid = () => 
    isDateValid() 
    && isNameValid()
    && isEmailValid()
    && isTimeValid() 
    && isNumberOfGuestsValid() 
    && isOccasionValid();
    
  
  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleNameChange = e => setBookingName(e.target.value);

  const handleEmailChange = e => setBookingEmail(e.target.value);

  const handleSpecialRequestChange = e => setSpecialRequest(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, });
  };

  return (
    
    <form className="container grid" onSubmit={handleFormSubmit}>
    <div className='personal-info'>
      <FormField 
        label="Name" 
        htmlFor="booking-name" 
        hasError={!isDateValid()} 
        errorMessage={invalidNameErrorMessage}
      >
        <input 
          type="text" 
          id="booking-name" 
          name="booking-name" 
          value={bookingName} 
          required={true} 
          onChange={handleNameChange}
        />
      </FormField>
      <FormField 
        label="Email" 
        htmlFor="booking-email" 
        hasError={!isDateValid()} 
        errorMessage={invalidEmailErrorMessage}
      >
        <input 
          type="email" 
          id="booking-email" 
          name="booking-email" 
          value={bookingEmail} 
          required={true} 
          onChange={handleEmailChange}
        />
      </FormField>
      <FormField 
        label="Special Request" 
        htmlFor="special-request" 
        hasError={!isDateValid()} 
        errorMessage={invalidSpecialRequestErrorMessage}
      >
        <input 
          type="text" 
          id="special-request" 
          name="special-request" 
          value={specialRequest} 
          required={true} 
          onChange={handleSpecialRequestChange}
        />
      </FormField>
      <button 
        className="button-primary" 
        type="submit" 
        disabled={!areAllFieldsValid()}
      >
        Make your reservation
      </button>
      </div>
    <div className='table-info'>
      <FormField 
        label="Date" 
        htmlFor="booking-date" 
        hasError={!isDateValid()} 
        errorMessage={invalidDateErrorMessage}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required={true} 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()} 
        errorMessage={invalidTimeErrorMessage}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Number of guests" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Occasion" 
        htmlFor="booking-occasion" 
        hasError={!isOccasionValid()} 
        errorMessage={invalidOccasionErrorMessage}
      >
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required={true} 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion => 
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </FormField>
      
      </div>
    </form>
   
  );
};

export default BookingForm;
