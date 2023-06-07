import { SpinnerContainer, SpinnerItem, SpinnerText } from './spinner.styles';

interface SpinnerProps {
  message?: string;
}

const Spinner = ({ message }: SpinnerProps) => {
  return (
    <SpinnerContainer>
      <SpinnerItem />
      {message && <SpinnerText>{message}</SpinnerText>}
    </SpinnerContainer>
  );
};

export default Spinner;
