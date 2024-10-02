import groupService from '../services/groupService';
import projectService from '../services/projectService';

export const getGroupInfo = async () => {
  try {
    const groupData = await groupService.getCurrGroup();
    return groupData;
  } catch (error) {
    console.error('Error fetching group info:', error);
    return { success: false, message: error.message };
  }
};