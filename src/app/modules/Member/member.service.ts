import { Member } from "@prisma/client";
import prisma from "../../Shared/prisma";

const createMember = async (payload: any) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      email: payload?.email,
    },
  });
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};
const getAllMembers = async () => {
  const result = await prisma.member.findMany();
  return result;
};
const getSingleMember = async (id: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId: id,
    },
  });
  return result;
};
const updateMember = async (id: string, payload: Partial<Member>) => {
  const result = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: payload,
  });
  return result;
};

const deleteMember = async (id: string) => {
  const result = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });
  return result;
};

export const MemberServices = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
