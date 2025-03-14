// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START contentwarehouse_v1_generated_DocumentService_SearchDocuments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of documents.
   *  Format: projects/{project_number}/locations/{location}.
   */
  // const parent = 'abc123'
  /**
   *  The meta information collected about the end user, used to enforce access
   *  control and improve the search quality of the service.
   */
  // const requestMetadata = {}
  /**
   *  Query used to search against documents (keyword, filters, etc.).
   */
  // const documentQuery = {}
  /**
   *  An integer that specifies the current offset (that is, starting result
   *  location, amongst the documents deemed by the API as relevant) in search
   *  results. This field is only considered if
   *  page_token google.cloud.contentwarehouse.v1.SearchDocumentsRequest.page_token 
   *  is unset.
   *  The maximum allowed value is 5000. Otherwise an error is thrown.
   *  For example, 0 means to  return results starting from the first matching
   *  document, and 10 means to return from the 11th document. This can be used
   *  for pagination, (for example, pageSize = 10 and offset = 10 means to return
   *  from the second page).
   */
  // const offset = 1234
  /**
   *  A limit on the number of documents returned in the search results.
   *  Increasing this value above the default value of 10 can increase search
   *  response time. The value can be between 1 and 100.
   */
  // const pageSize = 1234
  /**
   *  The token specifying the current offset within search results.
   *  See
   *  SearchDocumentsResponse.next_page_token google.cloud.contentwarehouse.v1.SearchDocumentsResponse.next_page_token 
   *  for an explanation of how to obtain the next set of query results.
   */
  // const pageToken = 'abc123'
  /**
   *  The criteria determining how search results are sorted. For non-empty
   *  query, default is `"relevance desc"`. For empty query, default is
   *  `"upload_date desc"`.
   *  Supported options are:
   *  * `"relevance desc"`: By relevance descending, as determined by the API
   *    algorithms.
   *  * `"upload_date desc"`: By upload date descending.
   *  * `"upload_date"`: By upload date ascending.
   *  * `"update_date desc"`: By last updated date descending.
   *  * `"update_date"`: By last updated date ascending.
   *  * `"retrieval_importance desc"`: By retrieval importance of properties
   *    descending. This feature is still under development, please do not use
   *    unless otherwise instructed to do so.
   */
  // const orderBy = 'abc123'
  /**
   *  An expression specifying a histogram request against matching
   *  documents. Expression syntax is an aggregation function call with
   *  histogram facets and other options.
   *  The following aggregation functions are supported:
   *  * `count(string_histogram_facet)`: Count the number of matching entities
   *  for each distinct attribute value.
   *  Data types:
   *  * Histogram facet (aka filterable properties): Facet names with format
   *  &lt;schema id&gt;.&lt;facet&gt;. Facets will have the
   *  format of: `[a-zA-Z][a-zA-Z0-9_:/-.]`. If the facet is a child
   *  facet, then the parent hierarchy needs to be specified separated by
   *  dots in the prefix after the schema id. Thus, the format for a multi-
   *  level facet is: &lt;schema id&gt;.&lt;parent facet name&gt;.
   *  &lt;child facet name&gt;. Example:
   *  schema123.root_parent_facet.middle_facet.child_facet
   *  * DocumentSchemaId: (with no schema id prefix) to get
   *  histograms for each document type (returns the schema id path, e.g.
   *  projects/12345/locations/us-west/documentSchemas/abc123).
   *  Example expression:
   *  * Document type counts:
   *    count('DocumentSchemaId')
   *  * For schema id, abc123, get the counts for MORTGAGE_TYPE:
   *    count('abc123.MORTGAGE_TYPE')
   */
  // const histogramQueries = [1,2,3,4]
  /**
   *  Controls if the search document request requires the return of a total size
   *  of matched documents. See
   *  SearchDocumentsResponse.total_size google.cloud.contentwarehouse.v1.SearchDocumentsResponse.total_size.
   *  Enabling this flag may adversely impact performance. Hint: If this is
   *  used with pagination, set this flag on the initial query but set this
   *  to false on subsequent page calls (keep the total count locally).
   *  Defaults to false.
   */
  // const requireTotalSize = true
  /**
   *  Controls if the search document request requires the return of a total size
   *  of matched documents. See
   *  SearchDocumentsResponse.total_size google.cloud.contentwarehouse.v1.SearchDocumentsResponse.total_size.
   */
  // const totalResultSize = {}
  /**
   *  Experimental, do not use.
   *  The limit on the number of documents returned for the question-answering
   *  feature. To enable the question-answering feature, set
   *  DocumentQuery.is_nl_query  to true.
   */
  // const qaSizeLimit = 1234

  // Imports the Contentwarehouse library
  const {DocumentServiceClient} = require('@google-cloud/contentwarehouse').v1;

  // Instantiates a client
  const contentwarehouseClient = new DocumentServiceClient();

  async function callSearchDocuments() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = contentwarehouseClient.searchDocumentsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchDocuments();
  // [END contentwarehouse_v1_generated_DocumentService_SearchDocuments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
