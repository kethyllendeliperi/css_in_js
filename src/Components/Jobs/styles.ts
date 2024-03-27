import styled from 'styled-components';
import { colors } from '../../styles';

export const Jobs = styled.div`
  border: 1px solid ${colors.principal};
  background-color: ${colors.secondary};
  color: ${colors.principal};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.principal};
    color: ${colors.secondary};
  }
`

export const JobsTitle = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`

export const JobsLink = styled.a`
  border-color: ${colors.secondary};
  background-color: ${colors.principal};
  color: ${colors.secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    border-color: ${colors.principal};
    background-color: ${colors.secondary};
    color: ${colors.principal};
  }
`
