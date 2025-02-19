import { notes as defaultNotes } from "../data/note"; // rename import to avoid conflict

const STORAGE_KEY = "notes";

/**
 * get notes from localStorage or fallback to default notes.
 * @returns {Array} array of note objects.
 */
export const getNotes = () => {
  try {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    return savedNotes ? JSON.parse(savedNotes) : defaultNotes;
  } catch (error) {
    console.error("Error reading notes from localStorage:", error);
    return defaultNotes;
  }
};

/**
 * save notes array to localStorage.
 * @param {Array} notesData - the array of note objects to save.
 */
export const saveNotes = (notesData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
  } catch (error) {
    console.error("Error saving notes to localStorage:", error);
  }
};

/**
 * Iinitialize localStorage with default notes if empty.
 */
export const initializeNotes = () => {
  if (localStorage.getItem(STORAGE_KEY)) {
    // if no notes in storage
    console.log("initializing localStorage with default notes...");
    saveNotes(defaultNotes); // save default notes
  }
};
