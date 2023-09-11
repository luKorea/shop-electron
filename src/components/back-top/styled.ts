import styled from 'styled-components'

export const BackTopWrapper = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  text-align: center;
  font-weight: 800;
  font-size: 12px;
  color: #86909c;
  transition: all 0.1s ease;
  .custom-backtop:hover {
    background: var(--color-fill-3);
  }

  .custom-backtop:focus-visible {
    box-shadow: 0 0 0 2px var(--color-primary-light-3);
  }
`
