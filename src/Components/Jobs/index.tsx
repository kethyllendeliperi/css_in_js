import { Jobs, JobsLink, JobsTitle } from './styles';

export type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Job = (props: Props) => (
  <Jobs>
    <JobsTitle>{props.titulo}</JobsTitle>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <JobsLink href="#">
      Ver detalhes e candidatar-se
    </JobsLink>
  </Jobs>
);

export default Job;
