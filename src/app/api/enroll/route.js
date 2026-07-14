import { Client, Databases, ID } from 'node-appwrite';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
    const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
    const apiKey = process.env.APPWRITE_API_KEY;

    if (!projectId || !databaseId || !collectionId) {
      console.warn('Appwrite server configurations are missing in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'Appwrite credentials not configured on the server.',
          isConfigured: false
        },
        { status: 500 }
      );
    }

    // node-appwrite: use Client().setProject().setKey()
    const client = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId)
      .setKey(apiKey); // setKey is a method on node-appwrite, not the browser SDK

    const databases = new Databases(client);

    const payload = {
      fullName: data.fullName || '',
      whatsappNumber: data.whatsappNumber || '',
      basedInKaduna: data.basedInKaduna || '',
      isChurchLeader: data.isChurchLeader || '',
      enrollmentReason: data.enrollmentReason || '',
      submittedAt: new Date().toISOString(),
    };

    const response = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      payload
    );

    return NextResponse.json({
      success: true,
      documentId: response.$id,
      isConfigured: true
    });
  } catch (error) {
    console.error('Server Appwrite insertion error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Server database insertion failed.'
      },
      { status: 500 }
    );
  }
}
