import { useContext, ReactNode } from "react";
import { AccordionContext, useAccordionButton } from "react-bootstrap";
import { StyledMoreBtn } from "../../assets/styles/profile.styles";

interface ContextAwareToggleProps {
  children: ReactNode;
  eventKey: string;
  callback?: (eventKey: string) => void;
  isBottom?: boolean;
}

export const ContextAwareToggle = ({ children, eventKey, callback, isBottom }: ContextAwareToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  if (!isBottom && isCurrentEventKey) {
    return null;
  }

  return (
    <StyledMoreBtn
      type="button"
      onClick={decoratedOnClick}
    >
      {isCurrentEventKey ? "Collapse" : "More..."}
    </StyledMoreBtn>
  );
};
