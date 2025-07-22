/* eslint-disable no-useless-catch */

/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { slugify } from '~/utils/formatters';
import { boardModel } from '~/models/boardModel';
import ApiError from '~/utils/ApiError';
import { StatusCodes } from 'http-status-codes';

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.name),
    };
    const createBoard = await boardModel.createNew(newBoard);

    const getNewBoard = await boardModel.findOneById(createBoard.insertedId);

    return getNewBoard;
  } catch (error) {
    throw error;
  }
};
const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId);
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found! .');
    }
    return board;
  } catch (error) {
    throw error;
  }
};
const getProduct = async () => {
  try {
    const board = await boardModel.getProduct();
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board not found! .');
    }
    return board;
  } catch (error) {
    throw error;
  }
};
export const boardService = {
  createNew,
  getDetails,
  getProduct,
};
