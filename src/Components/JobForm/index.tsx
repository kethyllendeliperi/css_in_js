import { FormEvent, useState } from 'react';
import { FormContainer, Input, SearchButton } from './styles';

type Props = {
  onSearch: (term: string) => void;
};

const JobsForm = ({ onSearch }: Props) => {
  const [term, setTerm] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(term.toLocaleLowerCase());
  };

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, Fullstack, Node, Design"
        onChange={(e) => setTerm(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">Pesquisar</SearchButton>
    </FormContainer>
  );
};

export default JobsForm;
