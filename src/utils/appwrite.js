export async function saveEnrollment(data) {
  const payload = {
    fullName: data.fullName || '',
    whatsappNumber: data.whatsappNumber || '',
    basedInKaduna: data.basedInKaduna || '',
    isChurchLeader: data.isChurchLeader || '',
    enrollmentReason: data.enrollmentReason || '',
    submittedAt: new Date().toISOString(),
  };

  console.log('Attempting to save enrollment data via API:', payload);

  try {
    const response = await fetch('/api/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('Successfully saved to Appwrite via Server:', result);
      if (typeof window !== 'undefined') {
        localStorage.setItem('tea_last_enrollment', JSON.stringify(payload));
      }
      return { success: true, fallback: false, documentId: result.documentId };
    }

    if (result.isConfigured === false) {
      console.warn('Server reports Appwrite is not configured. Falling back to local storage.');
      return saveToLocalStorage(payload);
    }

    throw new Error(result.error || 'Server error saving enrollment');
  } catch (error) {
    console.error('API submission failed. Falling back to local storage:', error);
    return saveToLocalStorage(payload);
  }
}

function saveToLocalStorage(payload) {
  try {
    if (typeof window !== 'undefined') {
      const current = JSON.parse(localStorage.getItem('tea_enrollments') || '[]');
      current.push(payload);
      localStorage.setItem('tea_enrollments', JSON.stringify(current));
      localStorage.setItem('tea_last_enrollment', JSON.stringify(payload));
    }
    return { success: true, fallback: true, data: payload };
  } catch (e) {
    console.error('Fallback local storage failed:', e);
    return { success: false, error: 'Storage failed' };
  }
}
