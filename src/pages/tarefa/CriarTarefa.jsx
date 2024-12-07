import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

// Declaração do componente CriarTarefa, recebendo como props, do Componente ListarTarefa, os states handleClose, tarefas e setTarefas
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    // Abaixo uma variável é declarada para armazenar o id da tarefa, somando 1 ao maior id existente atualmente no state Tarefas
    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, []);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    // Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
    //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
    console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`);

    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader title="Cadastro de Tarefa" subheader="Complete as informações abaixo" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#1976D2' }} />
        <CardContent sx={{ width: '95%', maxWidth: '100%', backgroundColor: '#F5F5F5', padding: 3 }}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="tarefa_titulo" sx={{ color: '#1976D2', fontWeight: 'bold' }}>Título da Tarefa</InputLabel>
              <Input
                id="tarefa_titulo"
                value={tituloTarefa}
                onChange={(e) => setTituloTarefa(e.target.value)}
                sx={{ color: '#1976D2', fontWeight: 'bold' }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="tarefa_descricao" sx={{ color: '#1976D2', fontWeight: 'bold' }}>Descrição da Tarefa</InputLabel>
              <Input
                id="tarefa_descricao"
                value={descricaoTarefa}
                onChange={(e) => setDescricaoTarefa(e.target.value)}
                sx={{ color: '#1976D2', fontWeight: 'bold' }}
              />
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>
              <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="tarefa_inicio" sx={{ color: '#1976D2', fontWeight: 'bold' }}>Início da Tarefa</InputLabel>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                  sx={{ color: '#1976D2', fontWeight: 'bold' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel htmlFor="tarefa_fim" sx={{ color: '#1976D2', fontWeight: 'bold' }}>Fim da Tarefa</InputLabel>
                <Input
                  id="tarefa_fim"
                  type="date"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                  sx={{ color: '#1976D2', fontWeight: 'bold' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="tarefa_recurso" sx={{ color: '#1976D2', fontWeight: 'bold' }}>Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{ color: '#1976D2', fontWeight: 'bold' }}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="tarefa_status" sx={{ color: '#1976D2', fontWeight: 'bold' }}>Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                  sx={{ color: '#1976D2', fontWeight: 'bold' }}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleSalvar} sx={{ backgroundColor: '#1976D2', color: '#FFFFFF', fontWeight: 'bold' }}>
                  Salvar
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button size="small" variant="outlined" onClick={handleClose} sx={{ color: '#1976D2', fontWeight: 'bold' }}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;