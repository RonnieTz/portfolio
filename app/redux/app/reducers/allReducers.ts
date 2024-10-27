import { newFolder } from './newFolder';
import { newTextFile } from './newTextFile';
import { deleteLink } from './deleteLink';
import { cutPasteLink, cutPasteFolder } from './cut';
import { copyPasteLink, copyPasteTextFile, copyPasteFolder } from './copy';

export const allReducers = {
  newFolder,
  newTextFile,
  deleteLink,
  cutPasteLink,
  cutPasteFolder,
  copyPasteLink,
  copyPasteTextFile,
  copyPasteFolder,
};