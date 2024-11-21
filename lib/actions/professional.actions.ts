'use server';

import { connectToDatabase } from '@/lib/database';
import Professional from '@/lib/database/models/professional.model';
import { handleError } from '@/lib/utils';

import {
  CreateProfessionalParams,
  UpdateProfessionalParams,
  DeleteProfessionalParams,
  GetAllProfessionalsParams,
} from '@/types';

// CREATE
export async function createProfessional({ professional, path }: CreateProfessionalParams) {
  try {
    await connectToDatabase();

    const newProfessional = await Professional.create(professional);
    return JSON.parse(JSON.stringify(newProfessional));
  } catch (error) {
    handleError(error);
  }
}

// GET ONE BY ID
export async function getProfessionalById(professionalId: string) {
  try {
    await connectToDatabase();

    const professional = await Professional.findById(professionalId);
    if (!professional) throw new Error('Professional not found');

    return JSON.parse(JSON.stringify(professional));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateProfessional({ professional, path }: UpdateProfessionalParams) {
  try {
    await connectToDatabase();

    const updatedProfessional = await Professional.findByIdAndUpdate(
      professional._id,
      professional,
      { new: true }
    );

    return JSON.parse(JSON.stringify(updatedProfessional));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteProfessional({ professionalId, path }: DeleteProfessionalParams) {
  try {
    await connectToDatabase();

    const deletedProfessional = await Professional.findByIdAndDelete(professionalId);
    if (!deletedProfessional) throw new Error('Professional not found');
  } catch (error) {
    handleError(error);
  }
}

// GET ALL
export async function getAllProfessionals({ query, limit = 6, page }: GetAllProfessionalsParams) {
  try {
    await connectToDatabase();

    const nameCondition = query ? { name: { $regex: query, $options: 'i' } } : {};

    const skipAmount = (Number(page) - 1) * limit;
    const professionalsQuery = Professional.find(nameCondition)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit);

    const professionals = await professionalsQuery;
    const professionalsCount = await Professional.countDocuments(nameCondition);

    return {
      data: JSON.parse(JSON.stringify(professionals)),
      totalPages: Math.ceil(professionalsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
