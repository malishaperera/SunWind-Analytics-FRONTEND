import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useAuth } from "@clerk/clerk-react";

const baseUrl = "http://localhost:3000/api";

// Define a service using a base URL and expected endpoints
// export const api = createApi({
//         reducerPath: 'api',
//         baseQuery: fetchBaseQuery(
//             {
//                 baseUrl: baseUrl,
//                 prepareHeaders:async (headers) => {
//                     const clerk = window.Clerk;
//                     if (clerk){
//                         const token = await clerk.session.getToken();
//                         console.log("Retrieved token:", token);
//                         if (token) {
//                             headers.set('authorization', `Bearer ${token}`);
//                         }
//                     }
//                     return headers;
//                 }
//             }),

// export const api = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({
//         baseUrl,
//         prepareHeaders: async (headers) => {
//             if (window.Clerk && window.Clerk.session) {
//                 const token = await window.Clerk.session.getToken();
//                 console.log("Retrieved token:", token);
//                 if (token) {
//                     headers.set("Authorization", `Bearer ${token}`);
//                 }
//             }
//             return headers;
//         },
//     2}),
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: async (headers) => {
            const clerk = window.Clerk;

            // 🛑 IMPORTANT CHECKS
            if (!clerk || !clerk.session) return headers;

            const token = await clerk.session.getToken();

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
        endpoints: (build) => ({
            getEnergyGenerationRecordsBySolarUnit: build.query({
            query: ({id,groupBy,limit = 7}) => `/energy-generation-records/solar-unit/${id}?groupBy=${groupBy}&limit=${limit}`,
            }),
            getSolarUnitForUser: build.query({
            query: () => `/solar-units/me`,
            }),
            getSolarUnits: build.query({
                query: () => `/solar-units`,
            }),
            getSolarUnitById: build.query({
                query: (id) => `/solar-units/${id}`,
            }),
            createSolarUnit: build.mutation({
                query: (data) => ({
                    url: `/solar-units`,
                    method: "POST",
                    body: data,
                }),
            }),
            editSolarUnit: build.mutation({
                query: ({id, data}) => ({
                    url: `/solar-units/${id}`,
                    method: "PUT",
                    body: data,
                }),
            }),
            getAllUsers: build.query({
                query: () => `/users`,
            }),
    }),
    })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetEnergyGenerationRecordsBySolarUnitQuery,
    useGetSolarUnitForUserQuery,
    useGetSolarUnitsQuery,
    useGetSolarUnitByIdQuery,
    useCreateSolarUnitMutation,
    useEditSolarUnitMutation,
    useGetAllUsersQuery} = api;