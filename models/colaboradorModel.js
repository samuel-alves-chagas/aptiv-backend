const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnderecoSchema = new Schema({
    logradouro: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    bairro: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    cidade: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    estado: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    cep: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    pais: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }
});

const DadosPessoaisSchema = new Schema({
    data_nascimento: {
        type: Date,
        required: [true,'*Campo obrigatório!']
    }, 
    endereco: {
        type: EnderecoSchema,
        required: [true,'*Campo obrigatório!']
    },
    telefone: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    email: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    cpf: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }
});

const HistoricoFeriasSchema = new Schema({
    data_inicio: {
        type: Date,
        required: [true,'*Campo obrigatório!']
    },
    data_fim: {
        type: Date,
        required: [true,'*Campo obrigatório!']
    },
    status: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
});

const FeriasSchema = new Schema({
    dias_de_saldo: {
        type: Number,
        required: [true,'*Campo obrigatório!']
    },
    historico_ferias: {
        type: [HistoricoFeriasSchema]
    }
});

const DescontoBeneficioSchema = new Schema({
    tipo: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }, 
    valor: {
        type: Number,
        required: [true,'*Campo obrigatório!']
    }
});

const RemuneracaoSchema = new Schema({
    salario_base: {
        type: Number,
        required: [true,'*Campo obrigatório!']
    },
    descontos: {
        type: [DescontoBeneficioSchema]
    },
    beneficios: {
        type: [DescontoBeneficioSchema]
    }
});

const SchemaBeneficios = new Schema({
    id_do_beneficio: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }
})

const ColaboradorSchema = new Schema({
    nome: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    cargo: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    departamento: {
        type: String,
        required: [true,'*Campo obrigatório!']
    }, 
    perfil_de_acesso: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    data_admissao: {
        type: Date,
        required: [true,'*Campo obrigatório!']
    },
    data_demissao: {
        type: Date
    },
    id_unidade: {
        type: String,
        required: [true,'*Campo obrigatório!']
    },
    dados_pessoais: {
        type: DadosPessoaisSchema,
        required: [true,'*Campo obrigatório!']
    },
    ferias: {
        type: FeriasSchema,
        required: [true,'*Campo obrigatório!']
    },
    remuneracao: {
        type: RemuneracaoSchema,
        required: [true,'*Campo obrigatório!']
    },
    beneficios: {
        type: [SchemaBeneficios]
    },
    competencias: {
        type: [String]
    }
});

const Colaborador = mongoose.model('Colaborador', ColaboradorSchema);
module.exports = Colaborador;