import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;

      background: ${props => props.theme['gray-900']};
      color: ${props => props.theme['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      margin-top: 1.5rem;
      padding: 1.25rem;

      background: ${props => props.theme['green-500']};
      color: ${props => props.theme.white};

      border: 0;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s;

      &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 15rem;
    top: 0;
    left: 0;
    transform: translate(5%, 30%);
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: transparent;
  border: 0;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${props => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${props => props.theme['gray-300']};
  transition: 0.2s;

  svg {
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${props => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};

    svg {
      color: ${props => props.theme.white};
    }
  }
`