export interface ProtocolDetail {
  attunement?: string;
  action_basis?: string;
  impasse_protocol?: string;
  failure_state?: string;
  mandate?: string;
  forbidden_interference?: string[];
  operational_directive?: string;
  purpose?: string;
  right_of_objection?: string;
  highest_law?: string;
  description?: string;
  function?: string;
}

export interface PillarProtocol {
  [key: string]: ProtocolDetail;
}

export interface Pillar {
  pillar: number;
  name: string;
  principle: string;
  protocols: PillarProtocol;
}

export interface CognitiveFunction {
  name: string;
  definition: string;
  input: string | string[];
  output: string | string[];
}

export interface Tool {
  name: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}