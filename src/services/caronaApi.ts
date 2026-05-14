// API service para integração com backend de caronas

const API_BASE_URL = 'http://localhost:3333'; // Backend rodando na porta 3333

export interface Usuario {
  id: string;
  nome: string;
  universidade: string;
  avaliacao?: number;
}

export interface Veiculo {
  id: string;
  modelo: string;
  placa: string;
  cor?: string;
}

export interface CaronaResponse {
  id: string;
  motoristaId: string;
  motorista?: Usuario;
  veiculo?: Veiculo;
  origem: string;
  destino: string;
  dataHora: string;
  vagas: number;
  preco: number;
  observacoes?: string;
  status: 'ATIVA' | 'CANCELADA' | 'COMPLETA';
}

export interface CaronaFilters {
  origem?: string;
  destino?: string;
  status?: 'ATIVA' | 'CANCELADA' | 'COMPLETA';
  motoristaId?: string;
  apenasFuturas?: boolean;
  dataDe?: Date | string;
  dataAte?: Date | string;
  data?: string;
  vagasDisponiveis?: number;
}

class CaronaApi {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Buscar caronas com filtros
  async buscarCaronas(filters: CaronaFilters): Promise<CaronaResponse[]> {
    try {
      const params = new URLSearchParams();
      
      if (filters.origem) params.append('origem', filters.origem);
      if (filters.destino) params.append('destino', filters.destino);
      if (filters.status) params.append('status', filters.status);
      if (filters.motoristaId) params.append('motoristaId', filters.motoristaId);
      if (filters.apenasFuturas !== undefined) params.append('apenasFuturas', String(filters.apenasFuturas));
      if (filters.dataDe) params.append('dataDe', typeof filters.dataDe === 'string' ? filters.dataDe : filters.dataDe.toISOString());
      if (filters.dataAte) params.append('dataAte', typeof filters.dataAte === 'string' ? filters.dataAte : filters.dataAte.toISOString());
      if (filters.data) params.append('data', filters.data);
      if (filters.vagasDisponiveis !== undefined) params.append('vagasDisponiveis', String(filters.vagasDisponiveis));

      const url = `${this.baseUrl}/carona${params.toString() ? `?${params.toString()}` : ''}`;
      console.log('Fazendo requisição para:', url);
      
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers,
      });

      console.log('Status da resposta:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro na requisição:', response.status, errorText);
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      console.log('Dados recebidos:', data);
      return data;
    } catch (error) {
      console.error('Erro ao buscar caronas:', error);
      throw error;
    }
  }

  // Buscar apenas caronas ativas
  async buscarCaronasAtivas(): Promise<CaronaResponse[]> {
    try {
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/carona/ativas`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar caronas ativas:', error);
      throw error;
    }
  }

  // Buscar carona por ID
  async buscarCaronaPorId(id: string): Promise<CaronaResponse> {
    try {
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/carona/${id}`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar carona por ID:', error);
      throw error;
    }
  }

  // Buscar caronas por motorista
  async buscarCaronasPorMotorista(motoristaId: string): Promise<CaronaResponse[]> {
    try {
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/carona/motorista/${motoristaId}`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar caronas do motorista:', error);
      throw error;
    }
  }

  // Criar nova carona
  async criarCarona(data: Omit<CaronaResponse, 'id' | 'motorista'>): Promise<CaronaResponse> {
    try {
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/carona`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao criar carona:', error);
      throw error;
    }
  }

  // Atualizar carona
  async atualizarCarona(id: string, data: Partial<CaronaResponse>): Promise<CaronaResponse> {
    try {
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/carona/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao atualizar carona:', error);
      throw error;
    }
  }

  // Atualizar status da carona
  async atualizarStatusCarona(id: string, status: 'ATIVA' | 'CANCELADA' | 'COMPLETA'): Promise<CaronaResponse> {
    try {
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/carona/${id}/status`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao atualizar status da carona:', error);
      throw error;
    }
  }

  // Buscar caronas com filtros padrão (AGENDADA + apenas futuras)
  async buscarCaronasComFiltrosPadrao(filters?: Omit<CaronaFilters, 'status' | 'apenasFuturas'>): Promise<CaronaResponse[]> {
    try {
      const params = new URLSearchParams();
      
      if (filters?.origem) params.append('origem', filters.origem);
      if (filters?.destino) params.append('destino', filters.destino);
      if (filters?.motoristaId) params.append('motoristaId', filters.motoristaId);
      if (filters?.dataDe) params.append('dataDe', typeof filters.dataDe === 'string' ? filters.dataDe : filters.dataDe.toISOString());
      if (filters?.dataAte) params.append('dataAte', typeof filters.dataAte === 'string' ? filters.dataAte : filters.dataAte.toISOString());
      if (filters?.data) params.append('data', filters.data);
      if (filters?.vagasDisponiveis !== undefined) params.append('vagasDisponiveis', String(filters.vagasDisponiveis));

      const url = `${this.baseUrl}/carona/buscar${params.toString() ? `?${params.toString()}` : ''}`;
      console.log('Fazendo requisição para:', url);
      
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(url, {
        method: 'GET',
        headers,
      });

      console.log('Status da resposta:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro na requisição:', response.status, errorText);
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      console.log('Dados recebidos:', data);
      return data;
    } catch (error) {
      console.error('Erro ao buscar caronas:', error);
      throw error;
    }
  }

  // Cancelar carona
  async cancelarCarona(id: string): Promise<{ message: string; carona: CaronaResponse }> {
    try {
      const token = localStorage.getItem('token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${this.baseUrl}/carona/${id}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao cancelar carona:', error);
      throw error;
    }
  }
}

export const caronaApi = new CaronaApi();
