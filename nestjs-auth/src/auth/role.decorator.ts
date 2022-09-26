import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => SetMetadata('role', role);

//alterar o comportamento de uma variável, função, método ou classe
//metadados
